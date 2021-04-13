import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, fetchServicesRequest } from "../actions/actionCreators";
import { Link } from "react-router-dom";

function ServiceList() {
  const { items, loading, error } = useSelector((state) => state.serviceList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, []);

  const repeatFetch = () => {
    dispatch(fetchServicesRequest());
  };

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <>
      {loading && <div className="loading"></div>}
      {error && (
        <div className="error">
          Ошибка загрузки данных
          <div className="error-button">
            <button onClick={repeatFetch}>Повторить запрос</button>
          </div>
        </div>
      )}
      {!loading && !error && (
        <>
          {items.map((o) => (
            <div className="service-item" key={o.id}>
              <div className="service-name-and-price">
                <Link to={`/services/${o.id}`}>{o.name}</Link>
                {o.price}
              </div>
              <div className="service-buttons">
                <button onClick={() => handleRemove(o.id)}>✕</button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ServiceList;
