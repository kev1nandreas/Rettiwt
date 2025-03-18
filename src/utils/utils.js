export const handleSubmit = (e, data, submit) => {
  e.preventDefault();
  const form = e.target;
  const content = form.content.value;

  if (content) {
    const newData = [
      {
        id: data.length + 1,
        content: content,
        date: new Date().toLocaleString(),
        like: 0,
        isSaved: false
      },
      ...data,
    ];

    submit(newData);

    localStorage.setItem("data", JSON.stringify(newData));
    form.reset();
    window.location.reload();
  }
};

export const handleLike = (e, id, setLike, like) => {
  let data = JSON.parse(localStorage.getItem("data"));

  data = data.map((item) =>
    item.id === id ? { ...item, like: item.like + 1 } : item
  );

  localStorage.setItem("data", JSON.stringify(data));

  setLike(like + 1);
};

export const handleSave = (e, id, setSaved, saved) => {
  let data = JSON.parse(localStorage.getItem("data"));

  data = data.map((item) =>
    item.id === id ? { ...item, isSaved: !item.isSaved } : item
  );

  localStorage.setItem("data", JSON.stringify(data));

  setSaved(!saved);
};

export const handleLongSubmit = (e) => {
  e.preventDefault();
  const oldData = JSON.parse(localStorage.getItem("data")) || [];
  const form = e.target;
  const content = form.content.value;

  if (content) {
    const newData = [
      {
        id: oldData.length + 1,
        content: content,
        date: new Date().toLocaleString(),
        like: 0,
        isSaved: false
      },
      ...oldData,
    ];

    localStorage.setItem("data", JSON.stringify(newData));
    form.reset();
    window.location.reload();
  }
}

export const handleEdit = (e, close, id, update) => {
  e.preventDefault();
  const form = e.target;
  const content = form.content.value;

  if (content) {
    let oldData = JSON.parse(localStorage.getItem("data"));
    oldData = oldData.map((item) =>
      item.id === id ? { ...item, content: content } : item
    );

    localStorage.setItem("data", JSON.stringify(oldData));
    update(content);
    close();
  }
}

export const handleDelete = (id) => {
  let data = JSON.parse(localStorage.getItem("data"));

  data = data.filter((item) => item.id !== id);

  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
}