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

/**
 * Obtiene la fecha actual formateada según el parametro pasado.
 * @param {String} format String que representa como será formateada la fecha 
 * @returns String
 */

export const getFecha = (format) => {
  let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate().toString().padStart(2, '0'),
    formatDate = '';
  month = month.toString().padStart(2, '0');

  switch (format.toLowerCase()) {
    case 'dd/mm/yyyy':
      formatDate = `${day}/${month}/${year}`;
      break;
    case 'yymmdd':
      year = year.toString().substring(2);
      formatDate = `${year}${month}${day}`;
      break;
    case 'yyyy-mm-dd':
      formatDate = `${year}-${month}-${day}`;
      break;
  }
  return formatDate;
};

