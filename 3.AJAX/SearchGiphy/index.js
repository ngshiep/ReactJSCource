window.onload = function () {
  const API_KEY = "g1yAqEWKDCWJgeNRU36mCYop4uMeYmo5";
  const btnSearch = document.getElementById("btn-search");
  const imageContainer = document.getElementById("image-container");
  const inputSearch = document.getElementById("input-search");

  const onSuccessGetData = (res) => {
    const data = res.data;
    console.log(data);
    let innerHTML = "";
    data.forEach((img) => {
      innerHTML =
        innerHTML +
        `<div class="justify-center items-center flex h-[300px] w-full overflow-hidden"> 
          <img
            src=${img.images.downsized.url}
            alt="${img.title}
            class="w-full h-full object-cover"
          />
        </div>`;
    });
    imageContainer.innerHTML = innerHTML;
  };

  const onFailGetData = (err) => {
    imageContainer.innerHTML = `<span class="text-red-500 col-span-5 text-center m-10">Download image failed</span>`;
    console.log(err);
  };

  const handleImgSearch = () => {
    const searchText = inputSearch.value;
    imageContainer.innerHTML = `<span class="text-red-500 col-span-5 text-center m-10">Loading ... </span>`;
    if (searchText) {
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${API_KEY}`;
      fetch(url)
        .then((res) => res.json())
        .then(onSuccessGetData)
        .catch(onFailGetData);
    }
  };

  btnSearch.addEventListener("click", handleImgSearch);
};
