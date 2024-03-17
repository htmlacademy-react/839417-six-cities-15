import MainPage from '../../pages/main-page/main-page';

type AppComponentProps = {
  offersCount: number;
}

function App({offersCount}: AppComponentProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;
