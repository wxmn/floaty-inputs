# Floaty Form Inputs
*Simple CSS + JS for user-friendly "floaty" HTML form inputs*

Check out a (live demo of an example form)[https://wxmn.github.io/floaty-inputs/index.html].

## Why "Floaty" Form Inputs

Floaty form inputs provide a great user experience: combining labels and inputs decreases cognitive load, and unlike with HTML placeholders, the label is always visible.

## Usage

Add `floaty.css` and `floaty.js`, then format your HTML inputs in the following way...

### HTML

Each input needs the following:

- 1st: An outer wrapper `div` with the class `"field"`
- 2nd: The `input` itself with the class `"floaty"`
- 3rd: A `label` that uses the `for` attribute (which refers to the `id` of the input)
- 4th: A `div` with the class `"input-background"`
- ...and it needs to be in that order, because of the way CSS works.

### Example HTML

```html
<!--form.html-->
<form>
  <div class="field">
    <input class="floaty" id="first_name" placeholder="Steve">
    <label for="first_name">First Name<label/>
    <div class="input-background"></div>
  </div>
</form>
```

## Rails Simple Form config

Add this to your Simple Form initializer:

```Ruby
# config/intializers/simple_form.rb
SimpleForm.setup do |config|
  config.wrappers :floaty, tag: "div" do |b|
    b.use :html5
    b.use :placeholder
    b.wrapper tag :div, class: "field" do |c|
      c.use :input, class: "floaty"
      c.use :label
      c.wrapper tag: :div, class: "input-background" do |d|
      end
    end
  end
end
```

Then in your view you can use:

```
# app/views/checkouts/_form.html.erb
<%= simple_form_for :checkout, wrapper: :floaty do |f| %>
  <%= f.input :first_name, placeholder: "Tim" %>
  <%= f.input :last_name, placeholder: "Urban" %>
  <%= f.submit %>
<% end %>
```

Now your Rails views will render HTML that work out of the box with floaty.css and floaty.js

## Example Form

Check out a (live demo of an example form)[https://wxmn.github.io/floaty-inputs/index.html].

Here is an image of an example:

![Floaty Inputs Example](https://raw.githubusercontent.com/wxmn/floaty-inputs/master/example/floaty-inputs-example.png)

***

Thank you to Stripe's [Elements Examples](https://stripe.github.io/elements-examples/) for inspiring this approach.