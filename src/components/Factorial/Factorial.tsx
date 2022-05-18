import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./factorial.scss";
import { TextField } from "@mui/material";
import Lightbox from "../lightbox/Lightbox";

const Factorial = () => {
    const [resultArray, setResultArray] = useState<string[]>([]);
    const [inputNumber, setInputNumber] = useState<string>("");

    const factorial = (number: any) => {
        let answer = 1;
        if (number < 0 || /^[a-zA-Z]+$/.test(number)) return "Nie istnieje";
        if (number === 0 || number === 1) {
            return answer;
        } else {
            for (var i = number; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }
    };

    const handleChange = (e: any) => {
        setInputNumber(e.target.value);
    };

    const handleClick = () => {
        if (inputNumber) {
            const result = factorial(inputNumber);
            setResultArray([...resultArray, `Silnia z ${inputNumber}: ${result}`]);
        }
    };

    return (
        <div className="factorial__section">
            <div className="factorial__section_input">
                <TextField
                    id="outlined-basic"
                    label="Liczba"
                    variant="outlined"
                    value={inputNumber}
                    onChange={handleChange}
                    size="small"
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" onClick={handleClick}>
                    Oblicz silnie
                </Button>
            </div>
            {resultArray.length > 0 ? (
                <div className="factorial__section_results">
                    <h2 className="factorial__section_results_title">Wyniki:</h2>
                    <div className="factorial__section_results_array">
                        {resultArray.map((result, index) => (
                            <Lightbox key={index} bigText>
                                <p className={index % 2 !== 0 ? "red-text" : ""}>{result}</p>
                            </Lightbox>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Factorial;
