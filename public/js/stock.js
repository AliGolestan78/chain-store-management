export const addStock = async function (data) {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/stock/",
      data,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
