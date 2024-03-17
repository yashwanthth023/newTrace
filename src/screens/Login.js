import React from 'react'
import { userName } from '../recoil/atoms/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getUserName } from '../recoil/selectors/selector';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../store/userSlice';

const Login = () => {
    const [user, setUser] = useRecoilState(userName);
    const storedUserName = useRecoilValue(getUserName);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData.userInfo)

    return (
        <div>
            <input type='text' onChange={(e) => dispatch(setUserInfo(e.target.value))} />
            <div>{userData}</div>
        </div>
    )
}

export default Login