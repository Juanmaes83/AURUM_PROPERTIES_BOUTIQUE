import { Link } from 'react-router-dom';

export const SpecNotFound = ({ slug }: { slug: string }) => (
  <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F7] flex items-center justify-center px-6">
    <div className="max-w-md text-center">
      <p className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono mb-6">SPEC PREVIEW · ERROR</p>
      <h1 className="font-serif text-3xl mb-4">Spec no encontrado</h1>
      <p className="text-[#888] text-sm mb-2">
        No hay specs registrados para <code className="text-[#c4a96a]">{slug}</code>.
      </p>
      <p className="text-[#666] text-xs mb-10 font-mono">
        El spec debe generarse desde el backend CRM y registrarse en specRegistry.ts antes de poder previsualizar.
      </p>
      <Link
        to="/"
        className="inline-block border border-[#c4a96a]/40 text-[#c4a96a] px-6 py-3 text-xs font-mono tracking-[0.2em] uppercase hover:border-[#c4a96a] transition-colors"
      >
        ← Volver a AURUM
      </Link>
    </div>
  </div>
);
