export const getAllProduct = async () => {
  try {
    console.log("running fetch");
    const [earphonesRes, headphonesRes, speakersRes] = await Promise.all([
      fetch("http://localhost:5000/earphones"),
      fetch("http://localhost:5000/headphones"),
      fetch("http://localhost:5000/speakers"),
    ]);

    const earphonesData = await earphonesRes.json();
    const headphonesData = await headphonesRes.json();
    const speakersData = await speakersRes.json();

    return { earphonesData, headphonesData, speakersData };
  } catch (err) {
    console.log(err, "Something went wrong while fetching");
  }
};
