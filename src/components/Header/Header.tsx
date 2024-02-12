import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h2>Header Component</h2>
      </div>
    </header>
  );
}

export default Header;
