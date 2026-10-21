import { NavLink as RouterNavLink } from 'react-router';

type Props = { label: string; to: string; mobile?: boolean; onNavigate?: () => void };

export default function NavLink({ label, to, mobile = false, onNavigate }: Props) {
  return (
    <RouterNavLink
      to={to}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        `${mobile ? 'mobile-nav-link' : 'desktop-nav-link'} ${isActive ? 'is-active' : ''}`
      }
    >
      <span>{label}</span>
      {!mobile && <span className="nav-underline" aria-hidden="true" />}
    </RouterNavLink>
  );
}
