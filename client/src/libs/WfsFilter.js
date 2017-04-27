class WfsFilter {

  constructor(filter){
    this._filter = filter;
  }

  get filter(){

    return this._filter;

  }

  set filter(val){

    console.log('filter val: ', val);

    //filterObj = 'Public_img460.tif';
    let filterArray = [];
    let filterClause = '';
    let filter = '';

    if(val) {
      // filter = encodeURIComponent(`filename like '%${filterObj.filename}%' `);
      // console.log(`filter: ${filter}`);

      // TODO Maybe? Wrap this in a function that takes in the filterobj[key], and then
      // uses the logic to add the item to the filter array?

      // In Progress: Write an if...then that checks for the item values on the form.  If
      // their value is populated we need to add it to the clause array.  If not
      // disregard it...
      if(val.filename !== '') {
        //clause = [dbName + " LIKE '%", formField.trim().toUpperCase(), "%'"].join("");
        filterClause = [`filename LIKE '%${val.filename}%'`].join(``);
        //console.log(`filterObj.filename is: ${filterObj.filename}`);
        //console.log('filterClauseArray: ', filterClauseArray);

        filterArray.push(filterClause);
        console.log('filterArray: ', filterArray);

        filter = encodeURIComponent(filterArray.join(" AND "));
        console.log('filter: ', filter);

      }
      else if(val.id !== '') {

        filterClause = [`id LIKE '%${val.id}%'`].join(``);
        filterArray.push(filterClause);

        console.log('filterArray: ', filterArray);

        filter = encodeURIComponent(filterArray.join(" AND "));
        console.log('filter: ', filter);

      }
    }
    this._filter = val;

  }

}

export default WfsFilter;
