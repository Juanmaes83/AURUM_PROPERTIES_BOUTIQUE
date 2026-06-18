import { Eye } from 'lucide-react';

export const CasasYMarPrivateHeader = () => (
  <div
    className="fixed top-0 left-0 right-0 z-[60] py-2 px-4 text-center"
    style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
  >
    <p className="font-body text-xs tracking-widest uppercase flex items-center justify-center gap-2">
      <Eye size={14} />
      Preview privada · Casas y Mar · Propuesta visual conceptual
    </p>
  </div>
);
