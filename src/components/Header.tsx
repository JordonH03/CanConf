import './Header.scss';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  return (
    <header className="header" role="banner">
      <div className="header__left">
        <button 
          className="header__title"
          onClick={() => onNavigate('home')}
          aria-label="CanConf - Go to homepage"
          title="CanConf - Canadian Tech Events Directory"
        >
          <h1>CanConf 🍁</h1>
        </button>
      </div>
      
      <div className="header__right">
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <button 
            className={`header__link ${currentPage === 'about' ? 'header__link--active' : ''}`}
            onClick={() => onNavigate('about')}
            aria-label="About CanConf and founder story"
            aria-current={currentPage === 'about' ? 'page' : undefined}
          >
            about
          </button>
          <span className="header__separator" aria-hidden="true">•</span>
          <a 
            href="https://github.com/tjklint/CanConf/blob/main/.github/CONTRIBUTING.md" 
            className="header__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contribute events to CanConf (opens in new tab)"
          >
            contribute
          </a>
          <span className="header__separator" aria-hidden="true">•</span>
          <a 
            href="https://github.com/tjklint/CanConf" 
            className="header__github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star CanConf on GitHub (opens in new tab)"
          >
            <span className="header__star">⭐</span>
            <span className="header__text">on</span>
            <svg className="header__github-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
