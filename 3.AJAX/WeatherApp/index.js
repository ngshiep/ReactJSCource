window.onload = function () {
  const API_KEY = "cdd39d053aa5062aed0376e8df8b4507";
  // const btnSearch = document.getElementById("btn-search");
  // const imageContainer = document.getElementById("image-container");
  // const inputSearch = document.getElementById("input-search");

  const onSuccessGetData = (res) => {
    const data = res.data;
    console.log(data);
    // let innerHTML = "";
    // data.forEach((img) => {
    //   innerHTML =
    //     innerHTML +
    //     `<div class="justify-center items-center flex h-[300px] w-full overflow-hidden">
    //       <img
    //         src=${img.images.downsized.url}
    //         alt="${img.title}
    //         class="w-full h-full object-cover"
    //       />
    //     </div>`;
    // });
    // imageContainer.innerHTML = innerHTML;
  };

  const onFailGetData = (err) => {
    imageContainer.innerHTML = `<span class="text-red-500 col-span-5 text-center m-10">Download image failed</span>`;
    console.log(err);
  };

  const handleImgSearch = () => {
    // const searchText = inputSearch.value;
    // imageContainer.innerHTML = `<span class="text-red-500 col-span-5 text-center m-10">Loading ... </span>`;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then(onSuccessGetData)
      .catch(onFailGetData);
  };
  handleImgSearch();
  //btnSearch.addEventListener("click", handleImgSearch);
};
