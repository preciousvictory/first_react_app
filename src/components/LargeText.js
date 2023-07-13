import "./LargeText.css";

function Run() {
    let b = 0;
    for (let a = 0; a < 10; a++) {
        b += 1;  
        console.log(a, b) 
    }
    return 'text!!!' + b; 
}
export function Multiple() {
    return (
        <div>{
            Run()
        }</div>
    );
};

const LargeText = ({ text1, text2 }) => {
    return (
        <div>
            <h1>{`${text1} ${text2}`}</h1>
        </div>
    );
};

export default LargeText;