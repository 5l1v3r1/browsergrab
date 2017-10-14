new Fingerprint2().get((result, components) => {
    // Add fingerprint to components
    components.push({
        key: "fp",
        value: result
    });

    // POST all components to /post
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (s) => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // redirect to url specified by server
            document.location.href = xhr.responseText;
        }
    };
    xhr.open("POST", "/post");
    xhr.send(JSON.stringify(components));
});
