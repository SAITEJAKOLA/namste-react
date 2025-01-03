import { useRouteError } from 'react-router-dom';
export const Error = () => {
    const error = useRouteError();
    console.log('Error', error);
    return (
        <div className='Error'>
            <h1>Oops!!</h1>
            <h2>{ error.error.message }</h2>

        </div>
    )
}
