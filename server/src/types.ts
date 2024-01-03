export namespace IEntity {
	export interface Todo {
		id: string; // ✅
		title: string; // 🎁
		description: string; // 🎁
		completed: boolean; // ✅
		deadline: number; // 🎁
		createdAt: string; // ✅
		ownerIP: string; // ✅
	}

	export interface SmallTodo extends Pick<Todo, "id" | "title" | "completed"> {}
}
