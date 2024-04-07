import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import UserProfile from '../user-profile/user-profile';

type HeaderProps = {
  isMainPage?: boolean;
  withoutUser?: boolean;
}

function Header({ isMainPage = false, withoutUser = false }: HeaderProps): JSX.Element {
  // TODO: isLogged нужно будет получать из стора
  const isLogged = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {isMainPage ? (
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>) : (
              <Link to={AppRoute.Root} className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            )}
          </div>
          {!withoutUser && <UserProfile isLogged={isLogged} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
