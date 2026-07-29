import { Info, AlertCircle } from 'lucide-react';

export default function InfoView() {
  const steps = [
    'Elegí una baraja según el tema de la sesión.',
    'Seleccioná una carta previamente.',
    'Permití que el consultante elija.',
    'Utilizá la opción de carta al azar.',
    'Presentá una pregunta a la vez.',
    'Permití que la conversación avance al ritmo de la persona.'
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] pb-24 pt-6 px-4 sm:px-6">
      <div className="max-w-md mx-auto flex flex-col gap-6">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-2 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-[#173B5E]/10 flex items-center justify-center text-[#173B5E] mb-1">
            <Info className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#173B5E] tracking-tight">
            INFORMACIÓN BÁSICA
          </h1>
        </header>

        {/* Content Box */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#173B5E]/10 flex flex-col gap-5">
          <h2 className="text-base font-bold text-[#173B5E] tracking-wide border-b border-[#173B5E]/10 pb-3">
            CÓMO UTILIZAR LAS BARAJAS
          </h2>

          <ol className="flex flex-col gap-3.5">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#173B5E]/90 leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#173B5E] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Disclaimer Notice Box */}
        <div className="bg-[#173B5E]/5 rounded-2xl p-5 border border-[#173B5E]/15 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#173B5E] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#173B5E]">
              Aviso Importante
            </span>
            <p className="text-xs text-[#173B5E]/80 leading-relaxed">
              Las Barajas Terapéuticas son una herramienta de apoyo. No realizan diagnósticos ni sustituyen la formación, la evaluación o el criterio profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
