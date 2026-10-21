import { useLocation } from 'react-router';
import { navigation } from '../data/navigation';

export default function RoutePreview() {
  const { pathname } = useLocation();
  const page = navigation.find((item) => item.to === pathname);
  return (
    <main className="container-site preview-main">
      <div className="preview-tag">STEP 02 / NAVIGATION PREVIEW</div>
      <h1 className="type-h1">{page?.label ?? 'Page introuvable'}<span className="text-primary">.</span></h1>
      <p>Cette page est un emplacement temporaire pour tester le Header. Aucun contenu du site n'a encore été construit.</p>
      <div className="preview-spacer" aria-hidden="true">TEST DE DÉFILEMENT · HEADER STICKY</div>
    </main>
  );
}
