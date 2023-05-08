import * as A from  './AnunciosStyled';
import CardCorpo from '../subComponents/CardAnuncio/'


const Anuncios = () => {

    return (
        <A.Anuncios>
            <A.ContainerTitulo>
            <h2>Anúncios recentes</h2>
            </A.ContainerTitulo>
            <A.Section>
                <CardCorpo />
            </A.Section>
        </A.Anuncios>
    )
}
export default Anuncios