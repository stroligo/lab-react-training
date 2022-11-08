function Greetings(children) {
  return (
    <div className="Greentins">
      <b>
        {children.lang === 'de' ? 'Halu' : ''}
        {children.lang === 'en' ? 'Hello' : ''}
        {children.lang === 'es' ? 'Ola' : ''}
        {children.lang === 'fr' ? 'Salut' : ''}
      </b>

      {children.children}
    </div>
  );
}
export default Greetings;
