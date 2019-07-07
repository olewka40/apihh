class Search {
  callback = [];
  on = (callback, name) => {
    this.callback.push({ callback: callback, name: name });
  };

  onSearch = value => {
    const callbacks = this.callback.filter(data => {
      if (data.name === "onSearch") {
        return data;
      }
    });

    callbacks.forEach(({ callback }) => {
      callback(value);
    });
  };
}

export default new Search();
