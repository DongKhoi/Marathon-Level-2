// ReduxThunkComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { Link } from 'react-router-dom';

function ReduxThunkComponent() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(() => {
      // Gọi API chỉ khi component được mount lần đầu tiên
      if (!data) {
        dispatch(fetchData());
      }
    }, [dispatch, data]);

    return (
        <div>
            {data && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
            <Link to="/">
                <button>Go to Home</button>
            </Link>
            <Link to="/redux">
                <button>Go to Redux</button>
            </Link>
        </div>
    );
}

export default ReduxThunkComponent;
