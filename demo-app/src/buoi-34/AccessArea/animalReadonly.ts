class AnimalReadonly {
    readonly species: string;

    constructor(species: string) {
        this.species = species;
    }

    changeSpecies(newSpecies: string) {
        // this.species = newSpecies; // Lỗi - không thể gán lại giá trị cho thành viên readonly
    }
}
