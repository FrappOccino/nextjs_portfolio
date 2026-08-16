
import Image from 'next/image'


export function Card(props : any) {

    return (
        <div className="card bg-base-100 w-96 shadow-sm h-100 border">
            <figure>
                <img
                    src={`/projects/${props.thumb_nail}`}
                    alt="Thumbnail"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <a href={props.link} className="btn btn-primary">Visit</a>
                </div>
            </div>
        </div>
    )
}