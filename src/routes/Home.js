import CardMesa from '../components/CardMesa';
import { useState, useEffect } from 'react';
import CardComanda from '../components/CardComanda';

function Home() {
  const [page, setPage] = useState(1);
  const [cardsPage, setCardsPage] = useState(11);
  const [selectedMesa, setSelectedMesa] = useState(null);

  useEffect(() => {
    handleScroll();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function handleScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight) {
      setPage(page + 1);
    }
    return;
  }

  const handleNumeroMesa = (mesa) => {
    setSelectedMesa(mesa);
    console.log(selectedMesa)
  };

  return (
    <div>
      <CardMesa qtdeMesas={page * cardsPage} numeroMesa={handleNumeroMesa} />
      {!selectedMesa ? null : <CardComanda mesaSelecionada={selectedMesa} />}
    </div>
  );
}

export default Home;
