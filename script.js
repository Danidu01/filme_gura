const movies = [
    {
      title: "Kadira Divyaraja",
      image: "https://cdn.moviefone.com/image-assets/1162357/7hzhCfc49qk0SxsFC8vSpxH9KHH.jpg?d=360x540&q=50"
    },
    {
      title: "Suhada Koka",
      image: "https://cdn.moviefone.com/image-assets/704885/k7q3Op7UzVgJhqVIo7fov9TX5z8.jpg?d=360x540&q=50"
    },
    {
      title: "Kambili",
      image: "https://cdn.moviefone.com/image-assets/1339001/cDHeHDOVOs4zJ0hwbYN1OHqyJ6h.jpg?d=360x540&q=50"
    },
    {
      title: "Rani",
      image: "https://cdn.moviefone.com/image-assets/1424160/f5L67z4myhqAevj4tV381cx7yHD.jpg?d=360x540&q=50"
    },
    {
      title: "Prawegaya",
      image: "https://cdn.moviefone.com/image-assets/507343/uQQjGlbu8vOjLMXHsIHqm7W0axt.jpg?d=360x540&q=50"
    },
    {
      title: "Gindari 2",
      image: "https://cdn.moviefone.com/image-assets/1117436/rS7bJmqBeLl2ME7B75f2S95J7OW.jpg?d=360x540&q=50"
    },
    {
      title: "Ape Principal",
      image: "https://cdn.moviefone.com/image-assets/1246024/cNMcbu1uPlEzAmwdDI2oHRtxfcr.jpg?d=360x540&q=50"
    },
    {
      title: "Gajaman",
      image: "https://cdn.moviefone.com/image-assets/881201/bAjVzuIYjzfvUgWsCWdCi4ShCte.jpg?d=360x540&q=50"
    },

    {
      title: "Mission: Impossible - Ghost Protocol",
      image: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    },
    {
      title: "HIT: The 3rd Case",
      image: "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_QL75_UY414_CR7,0,280,414_.jpg"
    },
    {
      title: "Retro",
      image: "https://m.media-amazon.com/images/M/MV5BM2FmYmFlMmItNDBmMy00ZmU2LTk2OWUtZjFmOGRlNTc1OTIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,38,280,414_.jpg"
    },
    {
      title: "Jack",
      image: "https://m.media-amazon.com/images/M/MV5BMmIxZjJjMTktOWFiMC00MjExLTllZGItZWRiNDc0MWI2OWEwXkEyXkFqcGc@._V1_QL75_UY562_CR11,0,380,562_.jpg"
    },
    {
      title: "Special OPS",
      image: "https://m.media-amazon.com/images/M/MV5BN2E3OTI0OGItMWRhMi00NjU1LTk1ZTctMDEwOWZiMDczOWNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg"
    },
    {
      title: "Singham",
      image: "https://m.media-amazon.com/images/M/MV5BYjlkNjdlOGItYjlmNC00ZmM3LWEzZTItYTgxMWUxNmEyYTMyXkEyXkFqcGc@._V1_QL75_UY414_CR3,0,280,414_.jpg"
    },
    {
      title: "Wanted",
      image: "https://m.media-amazon.com/images/M/MV5BMzNmZWMzNGQtMWZjZC00YTU2LTgwNGUtZTQwZGFkODBiOTRmXkEyXkFqcGc@._V1_QL75_UY414_CR3,0,280,414_.jpg"
    },
    {
      title: "Race 2",
      image: "https://m.media-amazon.com/images/M/MV5BODQzMjNlN2EtYmE4NC00ZjgwLTkwMTQtMGFkZDBmYzIyMDgxXkEyXkFqcGc@._V1_QL75_UY414_CR3,0,280,414_.jpg"
    }
  ];
  
  function displayMovies(filteredMovies) {
    const container = document.getElementById('movieContainer');
    const noResults = document.getElementById('noResults');
    container.innerHTML = '';
    
    if (filteredMovies.length === 0) {
      noResults.style.display = 'block';
      return;
    }
    
    noResults.style.display = 'none';
    
    filteredMovies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      
      const img = document.createElement('img');
      img.src = movie.image;
      img.alt = movie.title;
      
      const title = document.createElement('h3');
      title.textContent = movie.title;
      
      card.appendChild(img);
      card.appendChild(title);
      container.appendChild(card);
    });
  }
  
  function searchMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filtered);
  }
  
  // Initial display
  window.onload = () => {
    displayMovies(movies);
  };
  