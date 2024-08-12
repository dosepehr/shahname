import SelectLang from './SelectLang';

const Header = () => {
    return (
        <div className='p-8 bg-black fixed top-0 left-0 w-screen z-50'>
            <div className='switch'>
                <SelectLang />
            </div>
        </div>
    );
};

export default Header;
