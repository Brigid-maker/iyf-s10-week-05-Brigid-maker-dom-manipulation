<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM & Events Practice</title>
    <style>
        .highlight { background-color: yellow; }
        .container { padding: 20px; border: 1px solid #ccc; }
        .completed { text-decoration: line-through; color: gray; }
        .error-message { color: red; font-size: 12px; }
    </style>
</head>
<body>

    <!-- HEADER -->
    <header id="main-header">
        <h1>DOM Practice</h1>
        <nav>
            <ul class="nav-list">
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">About</a></li>
                <li><a href="#" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container">

        <!-- ARTICLE -->
        <article>
            <h2 class="title">Article Title</h2>
            <p class="content">This is the first paragraph.</p>
            <p class="content">This is the second paragraph.</p>
        </article>

        <!-- FORM -->
        <section>
            <h2>Form Section</h2>
            <form id="contact-form">
                <input type="text" id="name" name="name" placeholder="Name">
                <input type="email" id="email" name="email" placeholder="Email">
                <button type="submit">Submit</button>
            </form>
        </section>

        <!-- COUNTER -->
        <section>
            <h2>Counter</h2>
            <p id="count">0</p>
            <button id="increase">+</button>
            <button id="decrease">-</button>
            <button id="reset">Reset</button>
        </section>

        <!-- TASK LIST -->
        <section>
            <h2>Task List</h2>
            <input type="text" id="task-input" placeholder="Add task">
            <button id="add-task">Add Task</button>
            <ul id="task-list"></ul>
        </section>

    </main>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2026</p>
    </footer>

    <!-- LINK YOUR JS FILE -->
    <script src="events.js"></script>

</body>
</html>
