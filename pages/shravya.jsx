import mockData from "./../mockDb.json"


export default function ShravyaScreen () {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {mockData.shravya.title}
        </div>
    )
}
