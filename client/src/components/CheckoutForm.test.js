import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {

    //Arrange
    const { getByText, getByLabelText, getByRole, getByTestId, findByText, debug } = render(<CheckoutForm />);
    // console.log(container);

    let angelyn = 'Angelyn';
    let liem = 'Liem';
    let lala = 'La La Land';
    let disney = 'Disney';
    let dc = 'DC';
    let zipCode = '00000';

    //Act
    const firstName = getByLabelText(/first name/i);

    fireEvent.change(firstName, { target: { value: 'Angelyn' } });



    // firstName.value = angelyn;
    //  fireEvent.change(firstName);
    //  expect(firstName.value).toBe('Angelyn');

    const lastName = getByLabelText(/last name/i);

    fireEvent.change(lastName, { target: { value: 'Liem' } });

    // lastName.value = liem;
    // fireEvent.change(lastName);
    // expect(lastName.value).toBe('Liem');

    const address = getByLabelText(/address/i);

    fireEvent.change(address, { target: { value: 'La La Land' } });

    // address.value = lala;
    // fireEvent.change(address);
    // expect(address.value).toBe('La La Land');

    const city = getByLabelText(/city/i);

    fireEvent.change(city, { target: { value: 'Disney' } });

    // city.value = disney;
    // fireEvent.change(city);
    // expect(city.value).toBe('Disney');

    const state = getByLabelText(/state/i);

    fireEvent.change(state, { target: { value: 'DC' } });

    // state.value = dc;
    // fireEvent.change(state);
    // expect(state.value).toBe('DC');

    const zip = getByLabelText(/zip/i);

    fireEvent.change(zip, { target: { value: zipCode } });

    // zip.value = zipCode;
    // fireEvent.change(zip);
    // expect(zip.value).toBe('00000');

    const submit = getByRole('button');
    fireEvent.click(submit);

    const successMessage = getByTestId("successMessage");

    // debug();
 
    //Assert
    const message = 'You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Angelyn LiemLa La LandDisney, DC 00000';
    expect(successMessage.textContent).toBe(message);

    // expect(firstName.value).toBe(angelyn);
    // expect(await findByText(/Angelyn/i)).toBeInTheDocument();
    // expect(lastName.value).toBe(liem);
    // expect(address.value).toBe(lala);
    // expect(city.value).toBe(disney);
    // expect(state.value).toBe(dc);
    // expect(zip.value).toBe(zipCode);

   
    
    

});

