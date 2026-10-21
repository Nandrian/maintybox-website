import { navigation } from '../../data/navigation';
import NavLink from './NavLink';

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center justify-center gap-x-5 xl:gap-x-8" aria-label="Navigation principale">
      {navigation.map((item) => <NavLink key={item.to} {...item} />)}
    </nav>
  );
}
