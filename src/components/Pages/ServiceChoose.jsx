import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  serviceChooseRequest,
  changeServiceField,
} from "../../actions/actionCreators";

export default function ServiceChoose(props) {
  const id = Number(props.match.params.id);

  const { item, loading, error } = useSelector((state) => state.serviceChoose);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceChooseRequest(id));
  }, []);

  const repeatChooseService = () => {
    dispatch(serviceChooseRequest(id));
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  return (
    <div className="service">
      {loading && <div className="loading"></div>}
      {error && (
        <div className="error">
          Ошибка загрузки данных
          <div className="error-button">
            <button onClick={repeatChooseService}>Повторить запрос</button>
          </div>
        </div>
      )}
      {!loading && !error && (
        <form className="service-form">
          <div className="form-name">
            <label>
              Наименование
              <input name="name" onChange={handleChange} value={item.name} />
            </label>
          </div>
          <div className="form-price">
            <label>
              Стоимость
              <input name="price" onChange={handleChange} value={item.price} />
            </label>
          </div>
          <div className="form-content">
            <label>
              Описание
              <textarea
                name="content"
                onChange={handleChange}
                value={item.content}
              />
            </label>
          </div>
        </form>
      )}
    </div>
  );
}
