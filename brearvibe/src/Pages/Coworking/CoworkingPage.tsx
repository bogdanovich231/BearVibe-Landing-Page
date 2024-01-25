import { useEffect } from "react";
import { api } from "../../Helper/Api/Api";
import { IComponent } from "../../Helper/Interface/Interface";
import Loader from "../../Components/Loader/Loader";
import './CoworkingPage.scss'
function CoworkingPage() {
    const { isLoading, data, error } = api.useGetCoworkingQuery({});
    const coworkingData: IComponent = data;

    useEffect(() => {
        if (data) {
            return;
        } else if (error) {
            console.error('Error: ', error)
        }
    }, [data, error]);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className="coworking">
            <div className="coworking_image">
                <img src={coworkingData.data[0].attributes.image.data[0].attributes.url} alt="" />
            </div>
            <div className="coworking_information">
                <h2>{coworkingData.data[0].attributes.title}</h2>
                <div className="coworking_information_description">
                    <p className='coworking_information_description_break_word'>{coworkingData.data[0].attributes.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CoworkingPage;