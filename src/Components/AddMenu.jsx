export default function AddMenu(){
    return(
        <section>
            <h1>Add Menu</h1>
            <form action="">
                <div>
                    <label htmlFor="menuname">Menu Name</label>
                    <input type="text" name="menuname" id="menuname" placeholder="Enter menu name"/>
                </div>
                <div>
                    <label htmlFor="picture">Picture</label>
                    <input type="file" name="picture" id="picture" />
                </div>
                <div>
                    <label htmlFor="shortdescription">Short Description</label>
                    <input type="text" name="shortdescription" id="shortdescription"/>
                </div>
                <div>
                    <div>
                        <label htmlFor="opening">Opening Time</label>
                        <input type="time" name="opening" id="opening" />
                    </div>
                    <div>
                        <label htmlFor="closing">Closing Time</label>
                        <input type="time" name="closing" id="closing" />
                    </div>
                </div>
                <button type="submit">Save</button>
            </form>
        </section>
    )
}