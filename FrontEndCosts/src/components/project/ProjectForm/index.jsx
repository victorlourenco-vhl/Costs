export default function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selectione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>
    )
}