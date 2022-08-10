import { Button } from "../components/Button";

const data = [
    { index: 1, name: "John Doe" },
    { index: 2, name: "Victor Wayne" },
    { index: 3, name: "Jane Doe" },
];

// export function AllBankers() {
//     return (
//         <div className="users">
//             {data.map((user) => (
//                 <div className="user">{user}</div>
//             ))}
//         </div>
//     );
// };

export function AllBankers() {
    return (
        <div>
            <section>
                {data.map(({index, name}) => {
                    return (<div>{index} {name}</div>)
                })}
            </section>
        </div>
    );
}
