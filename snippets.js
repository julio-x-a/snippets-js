/**
 * Realiza una petición AJAX a la url dada y devuelve un objeto
 * con la informacion retornada por el servidor
 */

async function ajax(url, options = null) {
  try {
    let res = await fetch(url, options);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let data = await res.json();
    return data;
  } catch (err) {
    alert({
      icon: 'error',
      title: `Error ${err.status} : ${err.statusText}`
    });
    console.log(err.status, err.statusText);
  }
}
