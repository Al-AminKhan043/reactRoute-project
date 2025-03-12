import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
export default function Error(){
    const error= useRouteError();
    let message='Something went wrong!';
    let title='An error occured';
    
    if(error.status===500){
        message=JSON.parse(error.data).message;
    }
    if(error.status===404){
        title='Not found'
        message='Could not find resource'
    }

    return(
    <>
    <MainNavigation></MainNavigation>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
    </>
    )
}