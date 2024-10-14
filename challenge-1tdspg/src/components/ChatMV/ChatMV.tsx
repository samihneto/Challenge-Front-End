import Send from '../../img/content/agenda/send.png'
import Agenda from '../Agenda/Agenda'

export default function ChatMV() {


    return (
        <section>
            <div>
                <h1>Mecânico Virtual</h1>
                <p>
                    Morbi non sapien elit. Proin sed mauris eu dolor rhoncus condimentum sit amet quis nisi. Phasellus viverra mauris tempus, mattis purus eu, volutpat dolor. Mauris auctor sapien eu lobortis imperdiet. Quisque id bibendum arcu, ac feugiat ex. Nullam mollis lacus vitae dignissim lacinia. Vivamus et diam urna. Vivamus pellentesque augue tellus, at tincidunt enim scelerisque a.
                    Sed ac interdum leo. Maecenas eget enim ut ex tincidunt tempus. Integer mauris turpis, fringilla sed quam et, ultricies mollis lorem. Fusce aliquet tortor at velit mattis, eu laoreet sem commodo. Vivamus porttitor efficitur leo, et tincidunt odio suscipit et. Duis ultrices vestibulum erat, et rutrum ligula accumsan dapibus. Vestibulum scelerisque tristique consequat. Aenean convallis justo sed lacus convallis rutrum. Integer in tristique est, in sagittis sem. Nulla in maximus ante.
                </p>
                <div>
                    <input type="text" />
                    <button>
                        <img src={Send} alt="" />
                    </button>
                </div>
                <Agenda />
            </div>
        </section>
    )
}