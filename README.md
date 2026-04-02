<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 10 - Events</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        section {
            margin-bottom: 40px;
        }

        button {
            margin: 5px;
            padding: 8px 12px;
        }

        .completed {
            text-decoration: line-through;
            color: gray;
        }

        .error {
            border: 2px solid red;
        }

        .error-message {
            color: red;
            font-size: 12px;
        }
    </style>
</head>
<body>

    <h1>Lesson 10: Event Handling</h1>

    <!-- ========================= -->
    <!-- CLICK COUNTER -->
    <!-- ========================= -->
    <section>
        <h2>Click Counter</h2>

        <p>Count: <span id="count">0</span></p>

        <button id="increase">+</button>
        <button id="decrease">-</button>
        <button id="reset">Reset</button>
    </section>

    <!-- ========================= -->
    <!-- TASK LIST -->
    <!-- ========================= -->
    <section>
        <h2>Task List (Event Delegation)</h2>

        <input type="text" id="task-input" placeholder="Enter a task">
        <button id="add-task">Add Task</button>

        <ul id="task-list"></ul>
    </section>

    <!-- ========================= -->
    <!-- CONTACT FORM -->
    <!-- ========================= -->
    <section>
        <h2>Contact Form</h2>

        <form id="contact-form">
            <div>
                <label>Name:</label><br>
                <input type="text" id="name" name="name" required>
            </div>

            <br>

            <div>
                <label>Email:</label><br>
                <input type="email" id="email" name="email" required>
            </div>

            <br>

            <button type="submit">Submit</button>
        </form>
    </section>

    <!-- ========================= -->
    <!-- SCRIPT -->
    <!-- ========================= -->
    <script src="script.js"></script>

</body>
</html>
