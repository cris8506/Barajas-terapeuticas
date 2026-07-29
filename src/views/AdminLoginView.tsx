import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Lock, Mail, KeyRound, Loader2, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function AdminLoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/administracion/panel', { replace: true });
      } else {
        setCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, ingresá tu correo y contraseña.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate('/administracion/panel', { replace: true });
    } catch (err: any) {
      console.error('Login error:', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Correo o contraseña incorrectos.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Demasiados intentos fallidos. Intentá más tarde.');
      } else {
        setError(`Error de autenticación: ${err.message || 'Error desconocido'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-6 text-[#173B5E]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] p-4 sm:p-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
        <button
          onClick={() => navigate('/')}
          className="self-start flex items-center gap-2 text-xs font-semibold text-[#173B5E]/70 hover:text-[#173B5E] min-h-[44px] px-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio público</span>
        </button>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#173B5E]/10 flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#173B5E]/10 flex items-center justify-center text-[#173B5E]">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-extrabold text-[#173B5E]">ACCESO PRIVADO</h1>
            <p className="text-xs text-[#173B5E]/70">
              Administración de cartas e imágenes de Barajas Terapéuticas.
            </p>
          </div>

          {error && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#173B5E]">Correo electrónico</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 absolute left-3.5 text-[#173B5E]/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ejemplo.com"
                  required
                  className="w-full bg-[#FFF9F0] border border-[#173B5E]/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#173B5E] focus:outline-none focus:ring-2 focus:ring-[#173B5E] min-h-[44px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#173B5E]">Contraseña</label>
              <div className="relative flex items-center">
                <KeyRound className="w-4 h-4 absolute left-3.5 text-[#173B5E]/50" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#FFF9F0] border border-[#173B5E]/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#173B5E] focus:outline-none focus:ring-2 focus:ring-[#173B5E] min-h-[44px]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full bg-[#173B5E] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-[#173B5E]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Ingresando...</span>
                </>
              ) : (
                <span>Ingresar</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
