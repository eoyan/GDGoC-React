import "../styles/ProfileCard.css";
const ProfileCardItem = {
    name: "김나연",
    text: "안녕하세요! 반갑습니다.",
    image: "./image.png"
}

export default function ProfileCard() {
    return(
        <>
        <div>
            <img src={ProfileCardItem.image} alt="기본 이미지" 
                className="profile-image"
            />
            <h1 className='profile-name'>{ProfileCardItem.name}</h1>
            <p className='bio'>{ProfileCardItem.text}</p>
        </div>
        </>
    );
}