class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisDados = {
      Rex: ["RATO", "BOLA"],
      Mimi: ["BOLA", "LASER"],
      Fofo: ["BOLA", "RATO", "LASER"],
      Zero: ["RATO", "BOLA"],
      Bola: ["CAIXA", "NOVELO"],
      Bebe: ["LASER", "RATO", "BOLA"],
      Loco: ["SKATE", "RATO"]
    };

    const brinquedosValidos = new Set(Object.values(animaisDados).flat());

    const lista1 = brinquedosPessoa1.split(",").map(i => i.trim().toUpperCase());
    const lista2 = brinquedosPessoa2.split(",").map(i => i.trim().toUpperCase());
    const animalLista = ordemAnimais.split(",").map(i => i.trim());

    if (temDuplicados(lista1) || lista1.includes("") || lista1.some(b => !(brinquedosValidos.has(b)))) {
      return { erro: "Brinquedo inválido" };
    }
    if (temDuplicados(lista2) || lista2.includes("") || lista2.some(b => !(brinquedosValidos.has(b)))) {
      return { erro: "Brinquedo inválido" };
    }
    if (temDuplicados(animalLista) || (animalLista.some(animal => !(animal in animaisDados)))) {
      return { erro: "Animal inválido" };
    }

    let lista = [];

    let quantidadeAnimaisPessoa1 = 0;
    let quantidadeAnimaisPessoa2 = 0;

    for (const animalNome of animalLista) {
      const favoritos = animaisDados[animalNome];

      const pessoa1Tem = contemNaOrdem(lista1, favoritos);
      const pessoa2Tem = contemNaOrdem(lista2, favoritos);

      let destino;

      if (pessoa1Tem && !pessoa2Tem && quantidadeAnimaisPessoa1 < 3) {
        destino = "pessoa 1";
        quantidadeAnimaisPessoa1++;
      } else if (pessoa2Tem && !pessoa1Tem && quantidadeAnimaisPessoa2 < 3) {
        destino = "pessoa 2";
        quantidadeAnimaisPessoa2++;
      } else {
        destino = "abrigo";
      }

      lista.push(`${animalNome} - ${destino}`);
    }

    lista.sort();

    return { lista };

    function contemNaOrdem(listaBrinquedosPessoa, brinquedosFavoritos) {
      let i = 0;
      for (const brinquedo of listaBrinquedosPessoa) {
        if (brinquedo === brinquedosFavoritos[i]) {
          i++;
        }
        if (i === brinquedosFavoritos.length) {
          break;
        }
      }
      return i === brinquedosFavoritos.length;
    }

    function temDuplicados(lista) {
      if (new Set(lista).size === lista.length) {
        return false;
      } else {
        return true;
      }
    }

  }
}

export { AbrigoAnimais as AbrigoAnimais };
