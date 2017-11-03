class WfsFilter {

  constructor(filter) {
    this._filter = filter;
  }

  get filter() {

    //console.log('get filter');
    return this._filter;

  }

  set filter(newFilterObj) {

    //console.log('filter val: ', newFilterObj);

    const map = new Map();
    Object.keys(newFilterObj).forEach(key => {
      map.set(key, newFilterObj[key]);
    });
    //return map;
    console.log('map: ', map);

    this._filter = newFilterObj;











    //let output = newFilter + ' someCoolValueYo';

    //console.log(output);

    //return output;

    //---------------

    //filterObj = 'Public_img460.tif';
    // let filterArray = [];
    // let filterClause = '';
    // let filter = '';

    // if(newFilter) {
    //   // filter = encodeURIComponent(`filename like '%${filterObj.filename}%' `);
    //   // console.log(`filter: ${filter}`);
    //
    //   // TODO Maybe? Wrap this in a function that takes in the filterobj[key], and then
    //   // uses the logic to add the item to the filter array?
    //
    //   // In Progress: Write an if...then that checks for the item values on the form.  If
    //   // their value is populated we need to add it to the clause array.  If not
    //   // disregard it...
    //   if(val.filename !== '') {
    //     //clause = [dbName + " LIKE '%", formField.trim().toUpperCase(), "%'"].join("");
    //     filterClause = [`filename LIKE '%${val.filename}%'`].join(``);
    //     //console.log(`filterObj.filename is: ${filterObj.filename}`);
    //     //console.log('filterClauseArray: ', filterClauseArray);
    //
    //     filterArray.push(filterClause);
    //     console.log('filterArray: ', filterArray);
    //
    //     filter = encodeURIComponent(filterArray.join(" AND "));
    //     console.log('filter: ', filter);
    //
    //   }
    //   else if(val.id !== '') {
    //
    //     filterClause = [`id LIKE '%${val.id}%'`].join(``);
    //     filterArray.push(filterClause);
    //
    //     console.log('filterArray: ', filterArray);
    //
    //     filter = encodeURIComponent(filterArray.join(" AND "));
    //     console.log('filter: ', filter);
    //
    //   }
    // }



  }

}

export default WfsFilter;
