import notifyMessage from "../components/toast/ToastMessage";


export const fetchData = async (searchValue = "") => {
  const url = "https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8";

  return fetch(url)
    .then(res => {
      if (res.status === 200) return res.json()
      else throw new Error('Error while fetching data');
    }).then(data => {
      return data = data;
    }).catch(error => {
      notifyMessage('Something went wrong');
      return null;
    });
}

