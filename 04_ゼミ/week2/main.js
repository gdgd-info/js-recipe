const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const MemoContainer = document.getElementById("memo-container")

AddButton.onclick = function() {
  console.log(MemoInput.value)

  const card = document.createElement("div")
  card.className = "card" // <div class="card></div>
  card.textContent = MemoInput.value // <div class="card>こんばんは</div>
  MemoContainer.append(card)
}
