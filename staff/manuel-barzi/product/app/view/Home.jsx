const Home = () =>
    <div>
        <h1>App</h1>
        <p className="text-center">Hello, Wendy Darling!</p>
        <button type="button">Logout</button>
        <button type="button">+</button>
        <div>
            <ul className="list-style-none p-0">
                <li>
                    <h3>wendydarling</h3>
                    <img
                        className="w-full"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2g2MndlM2pvbzN3ZXZtNHdyNWtlcmc1YXdoM2M4bWR6bGFzM2kxbyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/yoJC2GnSClbPOkV0eA/giphy.gif"
                    />
                    <p>happy</p>
                    <time>2025-06-12T13:09:19.607Z</time>
                    <button type="button">🗑️</button>
                </li>
                <li>
                    <h3>chocolate</h3>
                    <img
                        className="w-full"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXZja3ZteG1tN3FxMHR1c2FoYXh2bDY5YzdpMm9yeXY4bHBpdHQ0dSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/cYZkY9HeKgofpQnOUl/giphy.gif"
                    />
                    <p>mi perrito encremado</p>
                    <time>2025-06-12T08:04:24.578Z</time>
                </li>
                <li>
                    <h3>chocolate</h3>
                    <img
                        className="w-full"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXkxZ3RmdDVpZzVqeHQzOXJycGUxZHpwM2RmZGJzdjBpcjl4a21uYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lZrKS40rAHTBOo/giphy.gif"
                    />
                    <p>love it</p>
                    <time>2025-06-10T13:18:04.389Z</time>
                </li>
                <li>
                    <h3>wendydarling</h3>
                    <img
                        className="w-full"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBrcmdtcXV0aGw5Nnk4bzY5M2g5eTE2aDZtd2E5MHpwZ2t1anJlZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gmWXumlxAVDAk/giphy.gif"
                    />
                    <p>...</p>
                    <time>2025-06-10T12:55:02.817Z</time>
                    <button type="button">🗑️</button>
                </li>
                <li>
                    <h3>wendydarling</h3>
                    <img
                        className="w-full"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBrcmdtcXV0aGw5Nnk4bzY5M2g5eTE2aDZtd2E5MHpwZ2t1anJlZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11NU4BxIpTYNGw/giphy.gif"
                    />
                    <p>feel great</p>
                    <time>2025-06-10T12:51:57.045Z</time>
                    <button type="button">🗑️</button>
                </li>
                <li>
                    <h3>wendydarling</h3>
                    <img
                        className="w-full"
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2J4aTZrYTdzNmptOXh3cWRsaWM0b3U3YTY4a2RiZDUwYW81OXIyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lv2VhwHrt6ljhvZ6LF/giphy.gif"
                    />
                    <p>i love my app</p>
                    <time>2025-06-09T13:49:46.623Z</time>
                    <button type="button">🗑️</button>
                </li>
            </ul>
        </div>

        <div>
            <h2>New post</h2>
            <form>
                <div className="flex flex-col m-y-10">
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url" />
                </div>
                <div className="flex flex-col m-y-10">
                    <label htmlFor="text">Text</label>
                    <input id="text" type="text" />
                </div>
                <div className="flex justify-end">
                    <button type="button">Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
